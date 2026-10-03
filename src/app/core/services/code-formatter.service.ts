import { Injectable } from '@angular/core';

export type CodeLanguage = 'markup' | 'css' | 'javascript';

@Injectable({ providedIn: 'root' })
export class CodeFormatterService {

  format(code: string, language: CodeLanguage): string {
    if (!code) return '';
    switch (language) {
      case 'css': return this.formatCSS(code);
      case 'markup': return this.formatHTML(code);
      case 'javascript': return this.formatJS(code);
    }
  }

  /* ═══════════ CSS ═══════════ */
  private formatCSS(css: string): string {
    let s = css.trim();
    if (!s) return '';

    // Collapse whitespace
    s = s.replace(/\s+/g, ' ');

    // Add `;` before `}` if missing (declaration without semicolon)
    s = s.replace(/([^;{}\s])(\})/g, '$1;$2');

    // Space before opening brace + newline after
    s = s.replace(/\s*\{\s*/g, ' {\n');

    // Newlines around closing brace
    s = s.replace(/\s*\}\s*/g, '\n}\n');

    // Newline after semicolon
    s = s.replace(/;\s*/g, ';\n');

    // Cleanup: trim, collapse blank lines
    s = s.replace(/^\n+|\n+$/g, '').replace(/\n\s*\n+/g, '\n');

    // Indent based on brace depth
    const lines = s.split('\n').map(l => l.trim()).filter(Boolean);
    const out: string[] = [];
    let depth = 0;
    for (const line of lines) {
      if (line.startsWith('}')) depth = Math.max(0, depth - 1);
      out.push('  '.repeat(depth) + line);
      if (line.endsWith('{')) depth++;
    }
    return out.join('\n');
  }

  /* ═══════════ HTML ═══════════ */
  private formatHTML(html: string): string {
    const s = html.trim();
    if (!s) return '';

    // Split at tag boundaries: `><` → `>\n<`
    const parts = s.replace(/>\s*</g, '>\n<').split('\n').map(l => l.trim()).filter(Boolean);

    const voidTags = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/i;
    const out: string[] = [];
    let depth = 0;

    for (const part of parts) {
      // Closing tag → decrease first
      if (part.startsWith('</')) {
        depth = Math.max(0, depth - 1);
        out.push('  '.repeat(depth) + part);
        continue;
      }

      out.push('  '.repeat(depth) + part);

      // Opening tag analysis
      const m = part.match(/^<([a-z][a-z0-9-]*)/i);
      if (!m) continue;

      const tag = m[1];
      const isVoid = voidTags.test(tag);
      const isSelfClosing = part.endsWith('/>');
      const closesItself = part.includes('</' + tag);

      if (!isVoid && !isSelfClosing && !closesItself) {
        depth++;
      }
    }
    return out.join('\n');
  }

  /* ═══════════ JavaScript (light) ═══════════ */
  private formatJS(js: string): string {
    let s = js.trim();
    if (!s) return '';

    // If the code already has multiple lines, leave it alone.
    if (s.split('\n').length > 3) return s;

    // Otherwise, format it lightly
    s = s.replace(/;\s*(?![\n}])/g, ';\n');
    s = s.replace(/\s*\{\s*/g, ' {\n');
    s = s.replace(/\s*\}\s*/g, '\n}\n');
    s = s.replace(/\n\s*\n+/g, '\n');

    const lines = s.split('\n').map(l => l.trim()).filter(Boolean);
    const out: string[] = [];
    let depth = 0;
    for (const line of lines) {
      if (line.startsWith('}')) depth = Math.max(0, depth - 1);
      out.push('  '.repeat(depth) + line);
      if (line.endsWith('{')) depth++;
    }
    return out.join('\n');
  }
}