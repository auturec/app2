import React from 'react';

import { MEDIUM } from 'constants/difficulties';
import * as WordSvg from 'assets/images/words';
import { wordSounds } from './sounds';

// missing images G & N, try to find better image packs
export const wordData = [
  {
    [MEDIUM]: <WordSvg.LetterA style={{ height: 'auto' }} />,
    name: 'A',
    ...wordSounds.letterA,
  },
  {
    [MEDIUM]: <WordSvg.LetterB style={{ height: 'auto' }} />,
    name: 'B',
    ...wordSounds.letterB,
  },
  {
    [MEDIUM]: <WordSvg.LetterC style={{ height: 'auto' }} />,
    name: 'C',
    ...wordSounds.letterC,
  },
  {
    [MEDIUM]: <WordSvg.LetterD style={{ height: 'auto' }} />,
    name: 'D',
    ...wordSounds.letterD,
  },
  {
    [MEDIUM]: <WordSvg.LetterE style={{ height: 'auto' }} />,
    name: 'E',
    ...wordSounds.letterE,
  },
  {
    [MEDIUM]: <WordSvg.LetterF style={{ height: 'auto' }} />,
    name: 'F',
    ...wordSounds.letterF,
  },
  {
    [MEDIUM]: <WordSvg.LetterG style={{ height: 'auto' }} />,
    name: 'G',
    ...wordSounds.letterG,
  },
  {
    [MEDIUM]: <WordSvg.LetterH style={{ height: 'auto' }} />,
    name: 'H',
    ...wordSounds.letterH,
  },
  {
    [MEDIUM]: <WordSvg.LetterI style={{ height: 'auto' }} />,
    name: 'I',
    ...wordSounds.letterI,
  },
  {
    [MEDIUM]: <WordSvg.LetterJ style={{ height: 'auto' }} />,
    name: 'J',
    ...wordSounds.letterJ,
  },
  {
    [MEDIUM]: <WordSvg.LetterK style={{ height: 'auto' }} />,
    name: 'K',
    ...wordSounds.letterK,
  },
  {
    [MEDIUM]: <WordSvg.LetterL style={{ height: 'auto' }} />,
    name: 'L',
    ...wordSounds.letterL,
  },
  {
    [MEDIUM]: <WordSvg.LetterM style={{ height: 'auto' }} />,
    name: 'M',
    ...wordSounds.letterM,
  },
  {
    [MEDIUM]: <WordSvg.LetterN style={{ height: 'auto' }} />,
    name: 'N',
    ...wordSounds.letterN,
  },
  {
    [MEDIUM]: <WordSvg.LetterO style={{ height: 'auto' }} />,
    name: 'O',
    ...wordSounds.letterO,
  },
  {
    [MEDIUM]: <WordSvg.LetterP style={{ height: 'auto' }} />,
    name: 'P',
    ...wordSounds.letterP,
  },
  {
    [MEDIUM]: <WordSvg.LetterQ style={{ height: 'auto' }} />,
    name: 'Q',
    ...wordSounds.letterQ,
  },
  {
    [MEDIUM]: <WordSvg.LetterR style={{ height: 'auto' }} />,
    name: 'R',
    ...wordSounds.letterR,
  },
  {
    [MEDIUM]: <WordSvg.LetterS style={{ height: 'auto' }} />,
    name: 'S',
    ...wordSounds.letterS,
  },
  {
    [MEDIUM]: <WordSvg.LetterT style={{ height: 'auto' }} />,
    name: 'T',
    ...wordSounds.letterT,
  },
  {
    [MEDIUM]: <WordSvg.LetterU style={{ height: 'auto' }} />,
    name: 'U',
    ...wordSounds.letterU,
  },
  {
    [MEDIUM]: <WordSvg.LetterV style={{ height: 'auto' }} />,
    name: 'V',
    ...wordSounds.letterV,
  },
  {
    [MEDIUM]: <WordSvg.LetterW style={{ height: 'auto' }} />,
    name: 'W',
    ...wordSounds.letterW,
  },
  {
    [MEDIUM]: <WordSvg.LetterX style={{ height: 'auto' }} />,
    name: 'X',
    ...wordSounds.letterX,
  },
  {
    [MEDIUM]: <WordSvg.LetterY style={{ height: 'auto' }} />,
    name: 'Y',
    ...wordSounds.letterY,
  },
  {
    [MEDIUM]: <WordSvg.LetterZ style={{ height: 'auto' }} />,
    name: 'Z',
    ...wordSounds.letterZ,
  },
];
