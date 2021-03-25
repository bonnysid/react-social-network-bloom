import profileReducer, {addPost} from "../redux/reducers/profile-reducer";

const state = {
    posts: [
        {id: 1, author: 'Nikita Bortsov', comment: 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.', likeCount: 90},
        {id: 2, author: 'Nikita Bortsov', comment: 'First post!', likeCount: 5}
    ],
}

const author = {
    name: 'bonnysid'
}

const message = 'New post'

it('post length should be incremented', () => {
    //1.test data
    const action = addPost(author, message);
    //2.action
    const newState = profileReducer(state, action);
    //3. expectation
    expect(newState.posts.length).toBe(3)

})