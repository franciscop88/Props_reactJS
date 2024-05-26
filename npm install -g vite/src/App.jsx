// src/App.jsx

import Title from './components/Title';
import SubTitle from './components/SubTitle';
import Image from './components/Image';
import Paragraph from './components/Paragraph';
import './App.css';

const App = () => {
  return (
    <div>
      <Title text="Hello World" />
      <SubTitle text="Welcome to my App" />
      <Image src="path/to/image.jpg" alt="Sample Image" width="200" height="200" />
      <Paragraph text="This is a sample paragraph." />
    </div>
  );
};

export default App;
