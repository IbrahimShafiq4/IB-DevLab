import type { SpecimenSource } from '../../../../core/specimen-registry';

import { COMPONENT_SOURCES } from './component-sources'; 
import { PROBLEM_SOLVING_SOURCES } from './problem-solving-sources';
import { CLEAN_CODE_SOURCES } from './clean-code-sources';
import { CSS_BATTLE_SOURCES } from './css-battle-sources';

export const SPECIMEN_SOURCES: Record<string, SpecimenSource> = {
    ...COMPONENT_SOURCES,
    ...CSS_BATTLE_SOURCES,
    ...PROBLEM_SOLVING_SOURCES,
    ...CLEAN_CODE_SOURCES,
};