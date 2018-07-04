
import app from './app';

export default function* rootSaga() {
    yield [
        app()
    ]
}

