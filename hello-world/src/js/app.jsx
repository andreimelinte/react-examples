import React from 'react';

class App extends React.Component {

  render() {

    console.log('sets');

    return (
      <section className="section">
        <h1 className="title">{ 'Hello World' }</h1>
        <p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas tristique, velit non consequat iaculis, quam urna mattis neque, sit amet
            iaculis turpis nibh at dui. Curabitur eu sapien et lorem fringilla suscipit eu in
            leo. Maecenas fringilla dapibus dictum. Vestibulum ac molestie libero. Donec eget
            dictum quam. Mauris viverra lacinia purus, nec dapibus nulla. Etiam porta elementum
            justo, ut ullamcorper ligula 0hendrerit vitae.</p>
        <p className="paragraph">Donec dictum leo id efficitur egestas. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin mollis sed
            ligula vitae luctus. Vivamus mi lectus, porta quis massa in, mollis bibendum eros.
            Duis vitae dui metus. Vestibulum quis consectetur lacus, eget sodales elit. Fusce
            sollicitudin placerat erat, sit amet cursus risus pharetra ut. Aliquam cursus
            ullamcorper metus, id feugiat massa finibus faucibus.</p>
      </section>
    );
  }
}

export default App;

