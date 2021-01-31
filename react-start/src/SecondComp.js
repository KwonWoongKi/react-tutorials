import React, {useState} from 'react'
import types from 'prop-types';

const SecondComp = (props) => {

    const {value, children} = props;
    
    const [text, setText] = useState('State 입니다');

    const onClickTest = () => {
        setText('button 외부 onClick');
    }

    return (
        <>
            <div>
                <h1>{text}</h1>
                <button onClick={()=>{setText('button 내부 onClick')}}>Click</button>
                <button onClick={onClickTest}>Click</button>
            </div>
        </>
    )
}

SecondComp.defaultProps = {
    value : '개발자들의 도서관'
}

SecondComp.propTypes = {
    value : types.number,
    value2 : types.string.isRequired
}

export default SecondComp;