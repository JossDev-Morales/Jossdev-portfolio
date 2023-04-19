import { useForm } from "react-hook-form";
import {motion} from 'framer-motion'

function Form({data}) {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return(
        <div className="form">
            {/*<form id='connect' onSubmit={handleSubmit(onSubmit)}>
                <h2>{data.form?.title}</h2>
                <label htmlFor="inpname">
                    <span>{data.form?.inputs.name}</span>
                    <input {...register("firstname")} className='inputform' type="text" placeholder={data.form?.inputs.name} id='inpname'/>
                </label>
                <label htmlFor="inpmail">
                    <span>{data.form?.inputs.mail}</span>
                    <input {...register("mail", { required: true, pattern: /^[A-Za-z]+$/i })} className='inputform' type="email" id="inpmail" placeholder={data.form?.inputs.mail}/>
                </label>
                <label htmlFor="message">
                    <span>{data.form?.inputs.message}</span>
                    <textarea placeholder={data.form?.inputs.holder} className='textareaform' id="message" cols="30" rows="10"></textarea>
                </label>
                <input type="submit" value={"submit"} />
            </form>
    */}
    <form id="connect" onSubmit={handleSubmit(onSubmit)}>
        <h2>{data.form?.title}</h2>
        <label htmlFor="inpname">
            <span>{data.form?.inputs.name}</span>
            <input {...register("name")} className='inputform' type="text" placeholder={data.form?.inputs.name} id='inpname'/>
        </label>
        <label htmlFor="inpmail">
            <span>{data.form?.inputs.mail}</span>
            <input {...register("mail", { required: true})} className='inputform' type="email" id="inpmail" placeholder={data.form?.inputs.mail}/>
        </label>
        <label htmlFor="message">
            <span>{data.form?.inputs.message}</span>
            <textarea {...register("message",{required:true})} placeholder={data.form?.inputs.holder} className='textareaform' id="message" cols="30" rows="10"></textarea>
        </label>
      <motion.input whileTap={{scale:1.1}} id="button" type="submit"  value={data.form?.button}/>
    </form>
        </div>
    )
}
export default Form