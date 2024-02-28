import { useEffect, useState } from "react";
import showError, { NetworkError } from "./toast-message";
import getBase from "./api";
export default function CategoryFetch() {
    let [category, setCategory] = useState([])
    return (// create state array
        //use hook useEffect()
        useEffect(() => {
            //call api 
            if (category.length === 0) {
                let apiAddress = getBase() + 'category.php';
                fetch(apiAddress)
                    .then((response) => response.json()) //convert string to json
                    .then((data) => {
                        console.log(data);
                        //get error info
                        let error = data[0]['error'];
                        if (error !== 'no') //there is error
                            showError(error);
                        else if (data[1]['total'] === 0)
                            showError('no category found');
                        else {
                            //there is not error and there are at least 1 category found 
                            data.splice(0, 2)// remove 2 object from 0th position;
                            console.log(data);
                            setCategory(data);
                        }
                    })
                    .catch((error) => {
                        // console.log(error);
                        // alert("oops something went wrong, please try after sometime.");
                        // toast("");
                        NetworkError('oops something went wrong, please try after sometime.');
                    });
            }
        })
    );
}