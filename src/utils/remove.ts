// delete folder given a path
// if folder doesnt exist, it will ignore

import * as fs from 'fs/promises';

export const remove = async (path: string, dir=false) => {

    await fs.rm(path, { recursive: dir });

}