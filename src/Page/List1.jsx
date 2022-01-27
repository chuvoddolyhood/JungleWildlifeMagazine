import React,{useEffect,useState} from 'react';
import img1 from "./../img/img2.png";
import styled from "styled-components";
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import "./list.css";
import fireDb from "../firebase";

const Container = styled.div`
   margin-left: 32px;                                           
`

const List1 = () => {

  const [data,setData] = useState({});

  useEffect(()=>{
    fireDb.child(`list`).on("value",(snapshot)=>{
      if(snapshot.val() !== null ){
        setData({...snapshot.val() });
      }else{
        setData({});
      }
     
    });
    return () =>{
      setData({});
    };
  }, []);

  return (
        
      <Container>
        {Object.keys(data).map((id) =>{
          return(
            <div className="card" key={id}>
            <div className="card-body">
              <img src={data[id].img}></img>
              <h3>{data[id].name}</h3>
              <Link to={`/view/${id}`}><button className="card-btn" ><SearchIcon /></button></Link>
  
            </div>
          </div>
       
          )
        })}
          
      </Container>
  );

  
};

export default List1;
