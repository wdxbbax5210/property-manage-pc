
import app from './app';
// import login from 'pages/login/saga';

export default function* rootSaga() {
    yield [
        app(),
        // login()
    ]
}

