import React, { useState } from "react";

function EditReviewForm({review, patchReview}){

    const [form, setForm] = useState({
        "score": review.score,
        "comment":"",
    })

    function handleFormChange(e){
        const key = e.target.name;
        const value = e.target.value;
        const newFormState = {...form};
        newFormState[key] = value;
        setForm(newFormState);
    }

    function handleSubmit(e){
        e.preventDefault();

        const formObj = {...form}
        if(formObj.comment=== "" ){
            formObj.comment=review.comment;
        }
        patchReview(formObj);
        clearForm();
    }

    function clearForm(){
        const replacementReview = {
            "score":review.score,
            "comment":""
        }
        setForm(replacementReview);
    }

    return (
        <form onSubmit={handleSubmit}>
            Score
            <br />
            <select name="score" value={form.score} onChange={handleFormChange}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
            Comment
            <br />
            <input type={"text"} name={"comment"} placeholder={review.comment} value={form.comment} onChange={handleFormChange} />
            <br />
            <button type="submit" >Submit</button>
            <br />
        </form>
    )
}

export default EditReviewForm;