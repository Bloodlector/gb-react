import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props){
      super(props);
    
      this.state = {
        count: 0,
        films:["film1"],
        author: {
          id: 1,
        },
      };
    };
    
    increment = ()=> {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
      this.setState((state)=>({
        count: state.count + 1,
      }));
    }
    
    decrement = ()=> {
        // this.setState({
        //     count: this.state.count - 1,
        //   });
        // }
    this.setState((state)=>({
         count: state.count - 1,
      }));
    }
    
    addFilm = () => {
        const film = "new film";

        // this.setState({
        //     films: [...state.films, film],
        //   });
        // }
        this.setState((state)=>({
          films: [...state.films, film],    
        }));
    }
    
    
      render(){   
        const { count, films, author } = this.state;
        return <div>
            <h1>ClassComponent</h1>
                <h1>Count: <span>{count}</span></h1>
                <button onClick={this.increment}>increment</button>
                <button onClick={this.decrement}>decrement</button>
                    <div>
                        {films.map((film)=>(
                            <h1>{film}</h1>
                        ))}
                    </div>
                    <div>                        
                        <button onClick={this.addFilm}>addFilm</button>
                    </div>
                    <div>
                        author: <span>{author.id}</span>
                    </div> 
        </div>
      }
    }