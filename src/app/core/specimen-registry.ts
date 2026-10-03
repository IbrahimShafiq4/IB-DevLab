export type CodeLanguage = 'markup' | 'css' | 'javascript';
export type StageTone = 'auto' | 'light' | 'dark';
export type SpecimenKind =
    | 'component'
    | 'css-battle'
    | 'problem-solving'
    | 'clean-code'
    | 'fullstack';

export interface SpecimenSource {
    html: string;
    css?: string;
    js?: string;
    extraFiles?: SpecimenExtraFile[];
    stage: StageTone;
}

export interface SpecimenExtraFile {
    filename: string;
    language: CodeLanguage | 'library' | 'typescript';
    code: string;
}

export interface ExtractedSource {
    bodyHtml: string;
    styleCss: string;
    scriptJs: string;
}

export interface Specimen {
    id: string;
    kind: SpecimenKind;
    title: string;
    description: string;
    date: string;
    tags: string[];
    href: string;
    external?: string;
    stage: StageTone;
    sortKey: number;
    source?: SpecimenSource;
    liveHtml?: string;
    liveCss?: string;
    liveJs?: string;
}

const VOID_TAGS = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img',
    'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'
]);

export function extractBody(rawHtml: string): string {
    if (!rawHtml) return '';
    const s = rawHtml.trim();

    const bodyMatch = s.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let body = bodyMatch ? bodyMatch[1] : s;

    body = body
        .replace(/<!DOCTYPE[^>]*>/gi, '')
        .replace(/<script[^>]*src=[^>]*>\s*<\/script>/gi, '')
        .replace(/<script[^>]*src=[^>]*\/>/gi, '')
        .replace(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi, '');

    return body.trim();
}

export function extractInlineStyles(rawHtml: string): string {
    if (!rawHtml) return '';
    const parts: string[] = [];
    const re = /<style[^>]*>([\s\S]*?)<\/style>/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(rawHtml)) !== null) {
        if (m[1]) parts.push(m[1].trim());
    }
    return parts.join('\n\n');
}

export function extractInlineScripts(rawHtml: string): string {
    if (!rawHtml) return '';
    const parts: string[] = [];
    const re = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;
    let m: RegExpExecArray | null;
    while ((m = re.exec(rawHtml)) !== null) {
        if (m[1]) parts.push(m[1].trim());
    }
    return parts.join('\n\n');
}

export function stripHtmlStyleScript(rawHtml: string): string {
    if (!rawHtml) return '';
    return rawHtml
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script(?![^>]*\bsrc=)[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<script[^>]*src=[^>]*>\s*<\/script>/gi, '')
        .replace(/<script[^>]*src=[^>]*\/>/gi, '');
}

export function extractSource(raw: SpecimenSource): ExtractedSource {
    const inlineCss = extractInlineStyles(raw.html);
    const inlineJs = extractInlineScripts(raw.html);

    const bodyHtml = extractBody(stripHtmlStyleScript(raw.html));
    const styleCss = [raw.css, inlineCss].filter(Boolean).join('\n\n');
    const scriptJs = [raw.js, inlineJs].filter(Boolean).join('\n\n');

    return {
        bodyHtml,
        styleCss,
        scriptJs
    };
}

export function isVoidTag(tag: string): boolean {
    return VOID_TAGS.has(tag.toLowerCase());
}