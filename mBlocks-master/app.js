class App extends Block {
    constructor(id) {
        super({ name: 'app', state: { phrase: 'Hello World' }, id });
    }

    builder(state, props) {
        console.log(this.block.children);
        return `<h1>${state.phrase}</h1><m-test id=${props.id}></m-test>`;
    }

    assemble() {
        new Test(this.props.id);
    }
}

class Test extends Block {
    constructor(id) {
        super({ name: 'test', state: { phrase: 'It Works' }, id });
    }

    builder(state, props) {
        return `<h1>${state.phrase}</h1>`;
    }

    assemble() {}
}

const app = new App('app');
const app2 = new App('test2');
const app3 = new App('test3');
app3.setState({ phrase: 'cheese' });
