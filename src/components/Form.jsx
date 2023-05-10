import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FormError from "./form-error";
import axios from "axios";
import { v4 } from "uuid";
import { json } from "react-router-dom";
import { useState } from "react";
import { Oval, ThreeDots } from "react-loader-spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function Form({ data }) {
  const [isLoading, setIsLoading] = useState(false);
  const [succes,setSucces]=useState(false)
  const [isSending,setIsSending]=useState(false)
  const {
    setError,
    register,
    handleSubmit,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm();
  const onSubmit = async (form) => { 
    if (!isSending) {
      setIsSending(true)
      setIsLoading(true);
      const chats = await axios.get(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_CHAT_BIN}/`,
        {
          headers: {
            "X-Access-Key":
              "$2b$10$e98drt8xbxpgLUdPBnsHuu.3YT1PCK1NnMizHwUXdIokGYD/6g5NS",
          },
        }
      )
      const existChat = chats.data.record.some((chat) => chat.mail == form.mail);
      let data;
      if (existChat) {
        data = chats.data.record.map((chat) => {
          if (chat.mail == form.mail) {
            chat.messages.push({ timestamp: Date.now(), content: form.message });
            return chat;
          } else {
            return chat;
          }
        });
      } else {
        chats.data.record.push({
          id: v4(),
          mail: form.mail,
          name: form.name,
          messages: [{ timestamp: Date.now(), content: form.message }],
        });
        data = chats.data.record;
      }
  
      let Options = {
        headers: {
          "X-Access-Key":
            "$2b$10$e98drt8xbxpgLUdPBnsHuu.3YT1PCK1NnMizHwUXdIokGYD/6g5NS",
          "Content-Type": "application/json",
        },
      };
  
      const response = await axios.put(
        `https://api.jsonbin.io/v3/b/${import.meta.env.VITE_CHAT_BIN}`,
        JSON.stringify(data),
        Options
      );
      setIsLoading(false);
      setSucces(true)
      setTimeout(() => {
        setSucces(false)
        setIsSending(false)
      }, 1300);   
    }
  };
  return (
    <div className="form">
      <form id="connect" onSubmit={handleSubmit(onSubmit)}>
        <h2>{data.home?.form?.title}</h2>
        <label htmlFor="inpname">
          <span>{data.home?.form?.inputs.name}</span>
          <input
            {...register("name", { required: true })}
            className="inputform"
            type="text"
            placeholder={data.home?.form?.inputs.name}
            id="inpname"
          />
          {errors.name && (
            <FormError type={errors.name.type} clear={clearErrors} />
          )}
        </label>
        <label htmlFor="inpmail">
          <span>{data.home?.form?.inputs.mail}</span>
          <input
            {...register("mail", { required: true })}
            className="inputform"
            type="email"
            id="inpmail"
            placeholder={data.home?.form?.inputs.mail}
          />
          {errors.mail && (
            <FormError type={errors.mail.type} clear={clearErrors} />
          )}
        </label>
        <label htmlFor="message">
          <span>{data.home?.form?.inputs.message}</span>
          <textarea
            {...register("message", { required: true })}
            placeholder={data.home?.form?.inputs.holder}
            className="textareaform"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
          {errors.message && (
            <FormError type={errors.message.type} clear={clearErrors} />
          )}
        </label>
        <motion.button whileTap={{ scale: 1.1 }} id="button" type="submit">
          {isLoading ? (
            <ThreeDots 
            height="80" 
            width="60" 
            radius="9"
            color="#fe004a" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
             />
          ) : !isLoading&&succes?<FontAwesomeIcon  size="2xl" icon={faCheck} />:(
            data.home?.form?.button
          )}
        </motion.button>
      </form>
    </div>
  );
}
export default Form;
