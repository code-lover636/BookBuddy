import pandas as pd
import nltk
from nltk.corpus import stopwords
 
nltk.download('stopwords')

def match_str(book,df):
    book = [w.lower() for w in book.split() if w not in stopwords.words('english')]
    repeat = {}
    for di in df:
        name = di['Book-Title'].lower()
        for w in book:
            if w in name:       
                if name in repeat:
                    repeat[name] += 1
                else:
                    repeat[name] = 0
    repeat = dict(sorted(repeat.items(),key=lambda item:item[1],reverse=True)[:20])
    return repeat

def search(book):
    df = pd.read_pickle('df.pkl')
    title = df['Book-Title'].drop_duplicates().reset_index()
    return match_str(book,title.to_dict('records'))

def response(book):
    df = pd.read_pickle('df.pkl')
    df['Book-Title'] = df['Book-Title'].apply(lambda x: x.lower())
    users = df[df['Book-Title']==book.lower()][['User-ID']].reset_index()
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


