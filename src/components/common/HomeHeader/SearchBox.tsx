import React, { useState } from 'react'
import styled from '@emotion/styled'

const SearchBox: React.FC = () => {
  const [textWrite, setTextWrite] = useState(false)

  const handleInputEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    if (newValue.length >= 1) {
      setTextWrite(true)
    } else {
      setTextWrite(false)
    }
  }

  return (
    <InputBox>
      <span>
        <img src="/images/common/search_bar.svg" alt="검색 버튼" />
      </span>
      <input placeholder="제목, 감독, 배우로 검색" type="text" onInput={handleInputEvent} />

      {textWrite ? (
        <Close type="reset">
          <span>
            <img src="/images/common/search_del.svg" alt="검색취소" />
          </span>
        </Close>
      ) : null}
    </InputBox>
  )
}

export default SearchBox

const InputBox = styled.form`
  position: absolute;
  overflow: hidden;
  right: 130px;
  animation: 500ms ease 0s 1 normal none running none;
  width: 204px;
  span {
    display: inline-block;
    position: absolute;
    top: 11px;
    left: 10px;
    line-height: 1;
    width: 16px;
    height: 16px;
  }
  input {
    font-size: 1em;
    font-weight: 400;
    letter-spacing: -0.4px;
    line-height: 1.875vw;
    width: 100%;
    height: 36px;
    padding: 6px 30px 6px 36px;
    border: 0px;
    border-radius: 2px;
    outline: 0px;
  }
`

const Close = styled.button`
  display: inline-block;
  position: absolute;
  top: 0px;
  right: 24px;
  line-height: 1;
  width: 16px;
  height: 16px;
  span {
    img {
      width: 100%;
    }
  }
`