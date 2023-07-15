import pandas as pd

def response(book):
    df = pd.read_pickle('df.pkl')
    users = df[df['Book-Title']== book][['User-ID']].reset_index()
    user_rated = df.merge(users, on="User-ID")
    user_rated = user_rated.sort_values(by="Book-Rating", ascending=False)
    user_rated.drop_duplicates('Book-Title', inplace=True)
    user_rated = user_rated[user_rated['Book-Title']!=book]
    user_rated = user_rated.to_dict('records') 
    return user_rated[:20]

def popular():
    df = pd.read_pickle('popular.pkl')
    df = df.to_dict('records')
    return df[:100]


