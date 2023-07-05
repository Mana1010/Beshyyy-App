import React from 'react';
import { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

function Beshy() {
    let [write, setWriting] = useState('');
    let [store, isStoring] = useState('');
    let [pages, setPages] = useState(0);
    let [emoji, setEmoji] = useState('💅 Slayy');
    let [male, female] = useState('');
    // function count(index){
    //     setPages(index);
    // }
    function ifs(){
      if(emoji === "💅 Slayy"){
        return "💅";
      }
      else if(emoji === "🤸‍♂️ Beshhy"){
        if(male === "🤸🏽‍♂️Male"){
          return "🤸🏽‍♂️";
        }
        else{
          return "🤸🏽‍♀️";
        }
      }
      else if(emoji === "🍋 Lemon"){
        return "🍋";
      }
      else if(emoji === "🏳️‍🌈 Bading HAHAHAH"){
        return "🏳️‍🌈";
      }
      else if(emoji === "🗿 Giga Chad"){
        return "🗿";
      }
      else if(emoji === "👨🏿 N"){
        return "👨🏿";
      }
      else{
        return "🤰";
      }

    }
      function textbeshy(){
        let container = [];
        let splitting = write.split(' ');
        for(let i = 0; i < splitting.length; i++){
          splitting[i] += ifs();
          container.push(splitting[i]);
        }
          isStoring(container.join(''));
      }
  return (
    <div>
        <div className='main'>
            <div className='box'>
                <header>
                    <h1 className='icon'>🤸🏻 Beshyy App</h1>
                </header>
                <div className='menu' style={{display: pages === 0 ? null : 'none'}}>
                    <div className='text'>
                    <h2 className='title'>Welcome</h2>
                    <h2 className='title'>to</h2>
                    <h2 className='besh'>Beshy App</h2>
                    <p className='lesson'>Lesson Learned: `Meron Kabang Lemon gusto ko Tequila`</p>
                    <button className='click' onClick={e => setPages(1)}>Continue na Madumb</button>
                    <p className='credit'>Created by: Tristan Vic Clarito</p>
                    </div>
                    </div>
                    <div className='about' style={{display: pages === 1 ? null : 'none'}}>
                    <h1 className='about-us'>About</h1>
                    <p>This app is for entertainment purposes only, btw congrats gali saton nga CCS, goodluck sa 2nd year AHAHAHAHAHHA</p>
                    <div className='buttons'>
                    <button onClick={e => setPages(0)}>Back</button>
                    <button onClick={e => setPages(2)}>Next</button>
                    </div>
                    </div>
                    <div className='customize' style={{display: pages === 2 ? null : 'none'}}>
                        <form onSubmit={e => e.preventDefault()}>
                            <div className='customi'>
                        <div className='sticker'>
                          <label>Select your Sticker</label>
                          <select onChange={(e) => {
                            setEmoji(e.target.value);
                          }} value={emoji}>
                            <option value="💅 Slayy">💅 Slayy</option>
                            <option value="🤸‍♂️ Beshhy">🤸‍♂️ Beshhy</option>
                            <option value="🍋 Lemon">🍋 Lemon</option>
                            <option value="🏳️‍🌈 Bading HAHAHAH">🏳️‍🌈 Bading HAHAHAH</option>
                            <option value="🗿 Giga Chad">🗿 Giga Chad</option>
                            <option value="👨🏿 N">👨🏿 N</option>
                            <option value="🤰Teenager">🤰Teenager</option>
                          </select>
                          </div>
                          <div className='gender'>
                          <label>Select your Gender</label>
                          <select disabled={emoji === "🤸‍♂️ Beshhy" ? false : true} onChange={e => female(e.target.value)} value={male}>
                            <option value="🤸🏽‍♂️Male">🤸🏽‍♂️Male</option>
                            <option value="🤸🏽‍♀️Female">🤸🏽‍♀️Female</option>
                          </select>
                          </div>
                          </div>
                            <div className='typing'>
                                <input value={write} placeholder='Enter your text' onChange={e => setWriting(e.target.value)}/>
                                <button type='submit' onClick={textbeshy}>Generate</button>
                            </div>
                            <div className='text-field'>
                              <div className='text-area'>{store}</div>
                                <div className='buttons-2'>
                                  <button onClick={() => setPages(1)}>Back</button>
                                  <button onClick={() => {
                                    isStoring('');
                                    setWriting('');
                                  }}>Clear</button>
                                  <CopyToClipboard text={store}>
                                  <button>Copy</button>
                                  </CopyToClipboard>
                                </div>
                            </div>

                        </form>
                    </div>     
            </div>
        </div>
    </div>
  )
}

export default Beshy