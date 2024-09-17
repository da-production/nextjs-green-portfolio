import {FC,ReactNode} from 'react'


interface TextAreaProps{
    icon?:ReactNode;
    placeholder?:string;
}

const TextArea:FC<TextAreaProps> = ({icon, placeholder}) => {
    return (
        <div className='relative w-full'>
            <div className='absolute inset-y-0 start-0 flex items-start ps-3.5 pt-5 pointer-events-none'>
                {icon}
            </div>
            <textarea placeholder={placeholder} className='w-full bg-primary-background text-primary-foreground rounded-lg text-sm ps-10 px-2.5 py-4 focus:outline-nonde' />
        </div>
    )
}

export default TextArea;