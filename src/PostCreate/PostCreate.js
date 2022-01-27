import React, { useState } from 'react';

export default function PostCreate(props) {

    const [input, setInput] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        props.onAdd(input);
        setInput('');
    }



    return (
        <div className='post-create'>
            <form onSubmit={onSubmit}>What are your top 5 favorite drama films of all time?
                <input type="text" name="drama" placeholder='1' id="d1" onChange={e => setInput(e.target.value)} />
                <input type="text" name="drama" placeholder='2' id="d2" onChange={e => setInput(e.target.value)} />
                <input type="text" name="drama" placeholder='3' id="d3" onChange={e => setInput(e.target.value)} />
                <input type="text" name="drama" placeholder='4' id="d4" onChange={e => setInput(e.target.value)} />
                <input type="text" name="drama" placeholder='5' id="d5" onChange={e => setInput(e.target.value)} />
                <button>Submit</button>
            </form>

            <form onSubmit={onSubmit}>What are your top 5 favorite comedy films of all time?
                <input type="text" name="comedy" placeholder='1' id="c1" onChange={e => setInput(e.target.value)} />
                <input type="text" name="comedy" placeholder='2' id="c2" onChange={e => setInput(e.target.value)} />
                <input type="text" name="comedy" placeholder='3' id="c3" onChange={e => setInput(e.target.value)} />
                <input type="text" name="comedy" placeholder='4' id="c4" onChange={e => setInput(e.target.value)} />
                <input type="text" name="comedy" placeholder='5' id="c5" onChange={e => setInput(e.target.value)} />
                <button>Submit</button>
            </form>
        </div>

    )
}
