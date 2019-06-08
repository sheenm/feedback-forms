import { neverReached } from "utils/NeverReached";

interface IState {
  nickname: string;
  eventDate: Date | undefined;
  email: string;
  isWantsReceiveNewsletter: boolean;
  whatLikesMore: number;
  overallSatisfaction: number;
}

type ChangeNicknameAction = {
  type: 'CHANGE_NICKNAME'
  nickname: string
};

type ChangeEventDateAction = {
  type: 'CHANGE_EVENTDATE'
  date: Date
};

type ChangeEmailAction = {
  type: 'CHANGE_EMAIL'
  email: string
};

type ChangeIsWantReceiveNewsletterAction = {
  type: 'CHANGE_RECEIVE_NEWSLETTER'
  isWantsReceiveNewsletter: boolean
};

type ChangeWhatLikesMoreAction = {
  type: 'CHANGE_WHAT_LIKES_MORE'
  whatLikesMore: number
};

type ChangeOverallSatisfacitonAction = {
  type: 'CHANGE_OVERALL_SATISFACTION'
  overallSatisfaction: number
};

type ResetAction = {
  type: 'RESET'
};

type ActionTypes = ChangeNicknameAction | ChangeEventDateAction | ChangeEmailAction |
  ChangeIsWantReceiveNewsletterAction | ChangeWhatLikesMoreAction |
  ChangeOverallSatisfacitonAction | ResetAction;

export const feedbackFormReducer = (state: IState, action: ActionTypes): IState => {

  switch (action.type) {
    case 'CHANGE_EMAIL':
      return { ...state, email: action.email };
    case 'CHANGE_EVENTDATE':
      return { ...state, eventDate: action.date };
    case 'CHANGE_NICKNAME':
      return { ...state, nickname: action.nickname };
    case 'CHANGE_OVERALL_SATISFACTION':
      return { ...state, overallSatisfaction: action.overallSatisfaction };
    case 'CHANGE_RECEIVE_NEWSLETTER':
      return { ...state, isWantsReceiveNewsletter: action.isWantsReceiveNewsletter };
    case 'CHANGE_WHAT_LIKES_MORE':
      return { ...state, whatLikesMore: action.whatLikesMore };
    case 'RESET':
      return {
        email: '',
        eventDate: undefined,
        isWantsReceiveNewsletter: true,
        nickname: '',
        overallSatisfaction: 0,
        whatLikesMore: 0
      };
    default:
      return neverReached(action);
  }
};
