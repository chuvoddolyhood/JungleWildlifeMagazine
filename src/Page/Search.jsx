import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {useLocation, Link as Link2} from "react-router-dom";
import fireDb from "../firebase";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import Nav from './Nav';
const Container1 = styled.div`
   margin-left: 32px;                                           
`

const Search = () => {
    const [data,setData] = useState({});

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    };

    let query = useQuery();
    let search = query.get("tenDiaphuong");
    console.log("search",search);

    useEffect(() => {
        searchData();
    },[search]);
    
    const searchData = () => {
        fireDb
          .child(`junglewildlifemagazine`)
          .orderByChild("tenDiaphuong")
          .equalTo(search)
          .on("value",(snapshot) => {
            if(snapshot.val()){
                const data = snapshot.val();
                setData(data);
            }
        });
    };
  return (
  <div>
    <Nav />
    
    <Container1>
        {Object.keys(data).map((id) =>{
          return(
            <div className="card" key={id}>
            <div className="card-body">
              <img src={data[id].img1}></img>
              <h3>{data[id].tenDiaphuong}</h3>
                <Link2 to={`/view/${id}`} ><button className="card-btn" ><SearchIcon /></button></Link2> 
             
  
            </div>
          </div>
       
          );
        })}
          
      </Container1>
      </div>
    );
};

export default Search;
