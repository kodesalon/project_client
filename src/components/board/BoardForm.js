import ContentInput from './ContentInput';
import TitleInput from './TitleInput';
import { useForm } from 'react-hook-form';
import * as BoardAPI from 'apis/board';
import { useContext, useEffect, useState } from 'react';
import Modal from 'common/Modal';
import * as MSG from 'util/constForResponse';

const BoardForm = () => {
  const [serverMessage, setServerMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onClick',
    reValidateMode: 'onClick',
    criteriaMode: 'firstError',
  });

  const onValid = (data) => {
    let params = data;
    // TO DO - 날짜 형식 상의해보기
    params.createdDateTime = new Date();

    console.log(params);
    /*
      { 
        title: "aa", 
        content: "vvvvv", 
        createdDateTime: Sun Jul 25 2021 22:19:37 GMT+0900 (한국 표준시)
      }
    */

    BoardAPI.postSaveBoard(params).then((res) => {
      console.log(res);
      if (res.code) {
        setServerMessage(MSG[res.code]);
      }
    });
  };

  const handleOnClose = () => {
    setServerMessage('');
  };
  return (
    <section className='creator_container'>
      <form onSubmit={handleSubmit(onValid)} className='signup_content'>
        <TitleInput register={register} errors={errors} />
        <ContentInput register={register} errors={errors} />
        <button className='creator_btn'>작성</button>
      </form>
      {serverMessage && <Modal content={serverMessage} handleOnClose={handleOnClose} />}
    </section>
  );
};

export default BoardForm;
