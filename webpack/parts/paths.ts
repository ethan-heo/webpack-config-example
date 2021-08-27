import path from 'path';

const paths = {
    root: path.resolve(__dirname, '..', '..'),
    src: path.resolve(__dirname, '..', '..', 'src'),
    dist: path.resolve(__dirname, '..', '..', 'src'),
}

type Path = keyof typeof paths;

export default {
    get(pathType: Path) {
        return paths[pathType];
    },
    combine(pathType: Path, ...args: string[]) {
        return path.resolve(paths[pathType], ...args)
    }
}