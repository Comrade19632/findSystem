import React, {Component} from 'react';

// Components
import Person from './Person';

// Some sample data for person


let data = {
    'Майки': [
        {
            name: 'black_Nike',
            image: './images/shirts/black_Nike.jpg'
        },
        {
            name: 'blue_Adidas',
            image: './images/shirts/blue_Adidas.jpg'
        },
        {
            name: 'green_NoName',
            image: './images/shirts/green_NoName.jpg'
        },
        {
            name: 'white_Adidas',
            image: './images/shirts/white_Adidas.jpg'
        },
        {
            name: 'pink_Puma',
            image: './images/shirts/pink_Puma.jpg'
        },
        {
            name: 'red_Reebok',
            image: './images/shirts/red_Reebok.jpg'
        },
        {
            name: 'white_Puma',
            image: './images/shirts/white_Puma.jpg'
        },
        {
            name: 'black_Puma',
            image: './images/shirts/black_Puma.jpg'
        }
    ],
    'Кепки': [
        {
            name: 'black_NewBalance',
            image: './images/hats/black_NewBalance.jpg'
        },
        {
            name: 'black_NorthFace',
            image: './images/hats/black_NorthFace.jpg'
        },
        {
            name: 'black_RusUltras',
            image: './images/hats/black_RusUltras.jpg'
        },
        {
            name: 'blue_Nike',
            image: './images/hats/blue_Nike.jpg'
        },
        {
            name: 'grey_RusUltras',
            image: './images/hats/grey_RusUltras.jpg'
        },
        {
            name: 'blue_Boss',
            image: './images/hats/blue_Boss.jpg'
        },
        {
            name: 'black_dog',
            image: './images/hats/black_dog.jpg'
        },
        {
            name: 'black_Obey',
            image: './images/hats/black_Obey.jpg'
        }
    ],
}

class App extends Component {

    constructor(props) {
        super(props);
        this.data = data;
        this.state = {
            current: [4, 5],
            toFlip: -1,
            selectType: 'Майки'
        };
    }

    nextPeople(chosenIndex) {
        this.setState({
            toFlip: chosenIndex === 0 ? 1 : 0,
            current: this.getNextPeople(this.state.current, chosenIndex, this.data[this.state.selectType].length - 1)
        });

        setTimeout(() => {
            this.setState({
                toFlip: -1
            });
        }, 550);
    }

    getNextPeople(current, chosenIndex, limit) {
        var random,
            result = Array(2),
            insertionIndex = chosenIndex === 0 ? 1 : 0;

        result[chosenIndex] = current[chosenIndex];

        while (true) {
            random = randomInRange();
            if (!~(current.indexOf(random))) {
                result[insertionIndex] = random;
                return result;
            }
        }

        function randomInRange() {
            return Math.floor(Math.random() * (1 + limit - 0)) + 0;
        }
    }
     handleChange =(event) => {
      const { target } = event;
      const { value } = target;

      this.setState({
        selectType: value,
      });
      console.log(this.state.selectType)
      console.log(this.state.selectType)
    }


    render() {
        var {current, toFlip} = this.state;
        return (
            <div><div className={'select'}>
                <select  name={'selectType'} value={this.state.selectType} onChange={this.handleChange}>
                    {['Майки', 'Кепки'].map(item => <option>{item}</option>)}
                </select>
              </div>
                <div className="App">
                    <div className="separator">or</div>
                    {
                        current.map((_, index) => {
                            return (<Person
                                index={index}
                                data={this.data[this.state.selectType][current[index]]}
                                next={this.nextPeople.bind(this)}
                                shouldFlip={index === toFlip}
                            />);
                        })
                    }
                </div>
            </div>
        );
    }
}

export default App;
