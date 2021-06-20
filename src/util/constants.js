export const ALIAS_FIRST_CHARACTER_REGEX = /^[a-zA-Z]/;
export const ALIAS_ALLOWED_CHARACTER_TYPE_REGEX =
  /^[a-zA-Z](?=.*\d)[a-zA-Z0-9]{3,14}$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%#~*?&]{4,}$/;
export const EMAIL_REGEX =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
export const PHONE_REGEX = /^[0-9\b -]{0,13}$/;
export const NAME_HANGUL_REGEX = /^[가-힣ㄱ-ㅎㅏ-ㅣ]+$/g;
export const NAME_SPACE_REGEX = /\s/g;

export const ALIAS_GUIDE =
  '아이디는 영문자로 시작하고 숫자가 포함되야 합니다.(4글자 ~ 15글자)';
export const ALIAS_GUIDE_START_WITH_ENGLISH = '영문으로 시작해야 합니다.';
export const ALIAS_GUIDE_UNION_ENGLISH_AND_NUMBER =
  '4 ~ 15자의 영문자와 숫자 조합이어야 합니다.';

export const PWD_MINIMUM_LENGTH = 8;
export const PWD_MAXIMUM_LENGTH = 16;
export const PWD_GUIDE = '소문자, 대문자, 특수문자 1개이상(8글자 ~ 16글자)';
export const PWD_GUIDE_UNEQUAL_EACH_OTHER = '비밀번호가 일치하지 않습니다.';
export const PWD_GUIDE_LENGTH = '8 ~ 16자이어야 합니다';
export const PWD_GUIDE_MORE_THAN_ONE_EACH_CHARACTER =
  '영어 대문자, 소문자, 특수문자, 숫자가 1자 이상 있어야 합니다.';

export const NAME_MINIMUM_LENGTH = 2;
export const NAME_MAXIMUM_LENGTH = 17;
export const NAME_GUIDE_ONLY_HANGUL = '한글만 입력 가능합니다.';
export const NAME_GUIDE_REMOVE_SPACE = '공백을 제거해야 합니다';
export const NAME_GUIDE_NAME_LENGTH = '2 ~ 18자 사이어야 합니다.';

export const EMAIL_GUIDE_FORM = '이메일 형식이 맞지 않습니다.';

export const PHONE_MAXIMUM_LENGTH = 13;
export const PHONE_GUIDE_ONLY_NUMBER = '숫자만 입력이 가능합니다.';
export const PHONE_GUIDE_LENGTH = '휴대폰의 길이를 확인해주세요.';
export const CORRECT_SIGNUP_INPUT = '완료 ☺︎';
