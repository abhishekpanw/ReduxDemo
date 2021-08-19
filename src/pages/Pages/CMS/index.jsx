import React, { useState, useRef, useEffect } from "react";
import JoditEditor from "jodit-react";
import swal from 'sweetalert'
import { getCMS, updateCms } from "../../../redux/cms/cms.action";
import { useDispatch, useSelector } from "react-redux";

function CMS() {

  const dispatch = useDispatch();
  const {data, updateCMS} = useSelector(state => state.cms)


  const editor = useRef(null)
	const [content, setContent] = useState('');
  const [type, setType] = useState('')


  

  
  useEffect(() => {
    dispatch(getCMS());
      // data.cms.length >0 && setContent(data.cms[1].terms)      
    setTimeout(() => {
      setType(1)
    }, 1000);
  } ,[])
 
  useEffect(() => {

    if(type == 1){  
      data.cms.length >0 && setContent(data.cms[1].terms)     
     }
     if(type == 2){  
       data.cms.length >0 && setContent(data.cms[0].privacy_policy)     
      }
      if(type == 3){  
       data.cms.length >0 && setContent(data.cms[2].about_us)     
      }
      
  } ,[type])
  
  // true && swal("Success!", "You clicked the button!", "success")

	const config = {
		readonly: false // all options from https://xdsoft.net/jodit/doc/
	}
 
  const handleUpdateCMS = (type,content)=>{
      // alert(type)
     console.log(content);
     dispatch(updateCms(type,content))
    
  }

  return (
    <div className="main-content">
      <section className="section">
        <div className="section-header">
          <h1>CMS</h1>
        </div>
        <div className="row"></div>
        <div className="section-body">
          <div class="row">
            <div class="col-12">
              <div class="card mb-0">
                <div class="card-body">
                  <ul class="nav nav-pills mb-3">
                    <li class="nav-item">
                   
                     
                    {type == 1? <span class="nav-link active" onClick={()=> setType(1)}>  Terms & Conditions{" "}</span> : <span class="nav-link" onClick={()=> setType(1)}>  Terms & Conditions{" "}</span>}          
                    </li>
                    <li class="nav-item ">
                    {type == 2? <span class="nav-link active" onClick={()=>setType(2)}>Privacy Policy{" "}</span> :<span class="nav-link" onClick={()=> setType(2)}>Privacy Policy{" "}</span>}
                    </li>
                    <li class="nav-item">
                    {type == 3? <span class="nav-link active" onClick={()=>setType(3)}>  About Us{" "}</span> :<span class="nav-link" onClick={()=> setType(3)}>  About Us{" "}</span>}
                    </li>
                  </ul>

                  <div class="card">
                    <div class="card-body">
                      <div class="form-group row mb-4">
                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3">
                         {type == 1 && 'Terms & Conditions'}
                         {type == 2 && 'Privacy Policy'}
                         {type == 3 && 'About Us'}
                        </label>
                        <div class="col-sm-12 col-md-7">
                          <JoditEditor
                            ref={editor}
                            value={content}
                            config={config}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {}}
                          />
                        </div>
                      </div>
                      <div class="form-group row mb-4">
                        <label class="col-form-label text-md-right col-12 col-md-3 col-lg-3"></label>
                        <div class="col-sm-12 col-md-7">
                          <button type="submit" class="btn btn-primary" onClick={() => handleUpdateCMS(type, content)}>
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CMS;
