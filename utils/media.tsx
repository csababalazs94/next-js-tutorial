import a from '../public/images/a.jpg';
import b from '../public/images/b.jpg';
import c from '../public/images/c.jpg';

export const media = [a, b, c];
export const mediaByIndex = (index) => media[index % media.length];
