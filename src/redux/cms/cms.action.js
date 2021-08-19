import axios from "axios";
import { authenticate } from "../../helpers";
import * as actionType from "./cms.actionType";

export const gettingCMS = (data) => ({
  type: actionType.GET_CMS,
  payload: data,
});

export const updatingCMS = (data) => ({
    type: actionType.UPDATE_CMS,
    payload: data,
  });

export const getCMS = () => {
  return (dispatch) => {
    // dispatch(
    //   gettingCMS({
    //     cms: [],
    //     success:'',
    //     loading: true,
    //     error: "",
    //   })
    // );

    axios
      .get("api/cms")
      .then((res) => {

        if (res.data.success) {
          dispatch(
            gettingCMS({
              cms: res.data.body.cms,
              success: res.data.message,
              loading: false,
              error: "",
            })
          )
        }

      })
      .catch((err) => {
        // dispatch(gettingCMS({
        //     cms: [],
        //     success:'',
        //     loading: false,
        //     error: err.data.message,
        //     }))
      });
  };
};

export const updateCms = (type,data)=>{

    return (dispatch)=>{
        axios
        .patch(`api/cms/${type}`,{
            data
        })
        .then((res) => {
  
          if (res.data.success) {
            dispatch(
                updatingCMS({
                success: res.data.message,
                loading: false,
                error: "",
              })
            )

            dispatch(getCMS())
          }
  
        })
        .catch((err) => {
          dispatch(updatingCMS({
              success:'',
              loading: false,
              error: err.data.message,
              }))
        });
    }

}
