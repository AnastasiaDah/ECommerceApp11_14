import {ProfileDetailsStore} from "./typesProfilePage";
import {Action} from "../../../general/redux/Action";
import Profile, {getProfilePreviewStr} from "../domain/model/Profile";
import {SET_PROFILE_DATA, START_PROFILE_LOAD} from "./asyncActions";

export function profileDetailsReducer(
    state: ProfileDetailsStore = {
        profile: new Profile(JSON.parse(getProfilePreviewStr)),
        isLoading: false},
    action: Action){

    switch(action.type){
        case START_PROFILE_LOAD: return {...state, isLoading: true};
        case SET_PROFILE_DATA: return {...state, isLoading: false};
        default: return state;
    }
}