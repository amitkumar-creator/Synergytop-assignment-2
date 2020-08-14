import React, {useState} from 'react'
import logo from '../Components/public/image/maxresdefault.jpg';
import cse from '../Components/public/image/yt1.png';



const Banner = () =>  {
    const [edit, setEdit] = useState({
        isEdit: false,
        name:"Hi! I'm Amit kumar",
        study:"I have completed BE in computer science engineering bhopal mp",
        wish:"Creator Youtube"
    })
   const theInputName = React.createRef()
   const theInputStudy = React.createRef()
   const theInputWish = React.createRef()
    const handleClick = () =>{
         setEdit({
             isEdit : !edit.isEdit,
             name: edit.name,
             study: edit.study,
             wish: edit.wish,
            })
    }

    const updateValue = () =>{
          setEdit({
              isEdit: false,
              name : theInputName.current.value,
              study : theInputStudy.current.value,
              wish : theInputWish.current.value,

          })
    }
        const isEdit = edit.isEdit
        return (
            <section className="container-banner">
                {
                  isEdit ? <div className="container-fluid">
                                <form><br/>
                                    <input type="text" className="form-control"
                                    defaultValue={edit.name}
                                    ref = {theInputName}
                                    />
                                    <input type="text" className="form-control"
                                    defaultValue={edit.study}
                                    ref = {theInputStudy}
                                    />
                                    <input type="text" className="form-control"
                                    defaultValue={edit.wish}
                                    ref = {theInputWish}
                                    />
                                    <button onClick={updateValue} className="btn-edit">Update</button><br />
                                </form>
                          </div>
                   :<div>
                            <a href="#home"><img id="profilepic" src={logo}  width="170" height="170" alt="profilepic"/></a>
                            <div><h1>{edit.name}</h1></div>
                            <div><h3>{edit.study}</h3></div>
                            <div><p id="paragarph1"> {edit.wish}</p></div>
                            <a id="logo" href="https://www.contentstack.com/" ><img src={cse} width="30" height="30" alt="cselogo"/></a> <br />
                            <button onClick={handleClick}
                             className="btn-edit"
                            >Edit</button>
                    </div> 
                }
            </section>
        )
    }

export default Banner


