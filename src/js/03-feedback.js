import { throttle } from "lodash";

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textarea = document.querySelector('textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(formFill, 500));
form.addEventListener('submit', submitForm);

function formFill(){
    const newObjSave = { email: email.value , message: textarea.value };
    // console.log("🚀 ~ formObj", newObjSave);
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(newObjSave));
};

function submitForm(evt) {
    evt.preventDefault();
    console.log({ email: email.value, message: textarea.value });
    form.reset();
    localStorage.getItem(LOCALSTORAGE_KEY);
};

function loadingStorage () {
    const getItemLOCALSTORAGE_KEY = localStorage.getItem(LOCALSTORAGE_KEY);
    // return getItemLOCALSTORAGE_KEY;
    return getItemLOCALSTORAGE_KEY === null ? undefined : JSON.parse(getItemLOCALSTORAGE_KEY);
};

const storageData = loadingStorage();

// console.log("🚀 ~ storageData", storageData);
if (storageData) {
  email.value = storageData.email;
  textarea.value = storageData.message;
};




    
