import { useState, useRef } from "react";
import React from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;  
    // this declares a function that passes in bob (a string) 
    //   and returns a string (could be void)
    obj?: {
        f1: string
    }
    person: Person;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string;
}

const TextField: React.FC<Props> = ({person, text, handleChange}) => {

    const [count, setCount] = useState<TextNode>({text: 'eh'});

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    setCount({text: '65'});
    return (
        <div ref={divRef}>
            <input ref={inputRef}
                   onChange={handleChange}
            />
            
        </div>
        
    )
}

export default TextField;