import React,{ useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Header from './Header';
import MainNote from './MainNote';
import Footer from './Footer';
import Note from './Note';

export const App = () => {

  const [Ntitle,Nupdate]=useState([]);

  const Add=(title)=>{
    
    Nupdate((oldData)=>{
      return ([...oldData,title]);
  })
  }

  const Delete=(id)=>{
        Nupdate((oldData)=>{
          return oldData.filter((arr,index)=>{
              return index !== id ;
          })
        })
  }
  return (
    <>
       <Header />
       
       <MainNote passNote={Add}/>

       <div className='noteCss'>
                {Ntitle.map((val,index)=>{
                        return <Note 
                          key={index}
                          id={index}
                          title1={val.Title}
                          component1={val.content}
                          Ditem={Delete}
                        />
                    })
                    }
      </div>
      <div style={{marginTop:'3.5rem'}}>
       <Footer />
      </div> 
    </>
  )
}

export default App;
