import { StorageService } from "../services/StorageServices";


export const videoInicialState = {
    selectedVideo: {},
    videos: StorageService.get('video', [])
};

export function videoReducer(state, action) {
    switch (action.type) {
        case 'add':
            const newList = [...state.videos, action.value];
            StorageService.set('video', newList)
            return { ...state, videos: newList };
        case 'select':
            return { ...state, selectedVideo: action.value };

        default: return state;
    }
}