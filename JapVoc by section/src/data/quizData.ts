export type Difficulty = 'easy' | 'medium' | 'hard';
export type Category = 'food' | 'animals' | 'colors' | 'numbers' | 'family' | 'weather' | 'time' | 'all';

export interface QuizWord {
  japanese: string;
  english: string;
  category: Category;
  difficulty: Difficulty;
  hint?: string;
  romaji?: string;
}

export const quizWords: QuizWord[] = [
  // Food (Easy)
  { japanese: 'りんご', english: 'apple', category: 'food', difficulty: 'easy', hint: 'A common red fruit', romaji: 'ringo' },
  { japanese: 'バナナ', english: 'banana', category: 'food', difficulty: 'easy', hint: 'Yellow curved fruit', romaji: 'banana' },
  { japanese: 'みかん', english: 'mandarin', category: 'food', difficulty: 'easy', hint: 'Small orange citrus fruit', romaji: 'mikan' },
  { japanese: 'ぶどう', english: 'grape', category: 'food', difficulty: 'easy', hint: 'Small round fruits that grow in clusters', romaji: 'budou' },
  { japanese: 'いちご', english: 'strawberry', category: 'food', difficulty: 'easy', hint: 'Red fruit with seeds on the outside', romaji: 'ichigo' },
  
  // Food (Medium)
  { japanese: 'トマト', english: 'tomato', category: 'food', difficulty: 'medium', hint: 'Red fruit often used in salads', romaji: 'tomato' },
  { japanese: 'にんじん', english: 'carrot', category: 'food', difficulty: 'medium', hint: 'Orange root vegetable', romaji: 'ninjin' },
  { japanese: 'ピーマン', english: 'bell pepper', category: 'food', difficulty: 'medium', hint: 'Comes in green, red, and yellow', romaji: 'piiman' },
  { japanese: 'なす', english: 'eggplant', category: 'food', difficulty: 'medium', hint: 'Purple vegetable', romaji: 'nasu' },
  { japanese: 'キャベツ', english: 'cabbage', category: 'food', difficulty: 'medium', hint: 'Round leafy vegetable', romaji: 'kyabetsu' },
  
  // Food (Hard)
  { japanese: 'ブロッコリー', english: 'broccoli', category: 'food', difficulty: 'hard', hint: 'Green vegetable with small florets', romaji: 'burokkorii' },
  { japanese: 'アスパラガス', english: 'asparagus', category: 'food', difficulty: 'hard', hint: 'Long green stalks', romaji: 'asuparagasu' },
  { japanese: 'カリフラワー', english: 'cauliflower', category: 'food', difficulty: 'hard', hint: 'White vegetable with florets', romaji: 'karifurawaa' },
  { japanese: 'セロリ', english: 'celery', category: 'food', difficulty: 'hard', hint: 'Long green stalks with leaves', romaji: 'serori' },
  { japanese: 'レタス', english: 'lettuce', category: 'food', difficulty: 'hard', hint: 'Common salad green', romaji: 'retasu' },

  // Animals (Easy)
  { japanese: 'ねこ', english: 'cat', category: 'animals', difficulty: 'easy', hint: 'Common house pet that meows', romaji: 'neko' },
  { japanese: 'いぬ', english: 'dog', category: 'animals', difficulty: 'easy', hint: 'Man\'s best friend', romaji: 'inu' },
  { japanese: 'うさぎ', english: 'rabbit', category: 'animals', difficulty: 'easy', hint: 'Long-eared hopping animal', romaji: 'usagi' },
  { japanese: 'ねずみ', english: 'mouse', category: 'animals', difficulty: 'easy', hint: 'Small rodent', romaji: 'nezumi' },
  { japanese: 'とり', english: 'bird', category: 'animals', difficulty: 'easy', hint: 'Flying animal with feathers', romaji: 'tori' },

  // Animals (Medium)
  { japanese: 'パンダ', english: 'panda', category: 'animals', difficulty: 'medium', hint: 'Black and white bear from China', romaji: 'panda' },
  { japanese: 'コアラ', english: 'koala', category: 'animals', difficulty: 'medium', hint: 'Australian tree-dwelling marsupial', romaji: 'koara' },
  { japanese: 'カンガルー', english: 'kangaroo', category: 'animals', difficulty: 'medium', hint: 'Australian jumping marsupial', romaji: 'kangaruu' },
  { japanese: 'ペンギン', english: 'penguin', category: 'animals', difficulty: 'medium', hint: 'Flightless bird that lives in cold regions', romaji: 'pengin' },
  { japanese: 'ぞう', english: 'elephant', category: 'animals', difficulty: 'medium', hint: 'Large animal with a trunk', romaji: 'zou' },

  // Animals (Hard)
  { japanese: 'チンパンジー', english: 'chimpanzee', category: 'animals', difficulty: 'hard', hint: 'Primate closely related to humans', romaji: 'chinpanjii' },
  { japanese: 'ゴリラ', english: 'gorilla', category: 'animals', difficulty: 'hard', hint: 'Largest living primate', romaji: 'gorira' },
  { japanese: 'カバ', english: 'hippopotamus', category: 'animals', difficulty: 'hard', hint: 'Large African mammal that lives in water', romaji: 'kaba' },
  { japanese: 'キリン', english: 'giraffe', category: 'animals', difficulty: 'hard', hint: 'Tall animal with a long neck', romaji: 'kirin' },
  { japanese: 'サイ', english: 'rhinoceros', category: 'animals', difficulty: 'hard', hint: 'Large animal with a horn on its nose', romaji: 'sai' },

  // Colors (Easy)
  { japanese: 'あか', english: 'red', category: 'colors', difficulty: 'easy', hint: 'Color of blood', romaji: 'aka' },
  { japanese: 'あお', english: 'blue', category: 'colors', difficulty: 'easy', hint: 'Color of the sky', romaji: 'ao' },
  { japanese: 'きいろ', english: 'yellow', category: 'colors', difficulty: 'easy', hint: 'Color of bananas', romaji: 'kiiro' },
  { japanese: 'しろ', english: 'white', category: 'colors', difficulty: 'easy', hint: 'Color of snow', romaji: 'shiro' },
  { japanese: 'くろ', english: 'black', category: 'colors', difficulty: 'easy', hint: 'Color of night', romaji: 'kuro' },

  // Colors (Medium)
  { japanese: 'みどり', english: 'green', category: 'colors', difficulty: 'medium', hint: 'Color of grass', romaji: 'midori' },
  { japanese: 'むらさき', english: 'purple', category: 'colors', difficulty: 'medium', hint: 'Color of grapes', romaji: 'murasaki' },
  { japanese: 'オレンジ', english: 'orange', category: 'colors', difficulty: 'medium', hint: 'Color of the fruit', romaji: 'orenji' },
  { japanese: 'ちゃいろ', english: 'brown', category: 'colors', difficulty: 'medium', hint: 'Color of chocolate', romaji: 'chairo' },
  { japanese: 'ピンク', english: 'pink', category: 'colors', difficulty: 'medium', hint: 'Light red color', romaji: 'pinku' },

  // Colors (Hard)
  { japanese: 'グレー', english: 'gray', category: 'colors', difficulty: 'hard', hint: 'Color between black and white', romaji: 'guree' },
  { japanese: 'ベージュ', english: 'beige', category: 'colors', difficulty: 'hard', hint: 'Light brown color', romaji: 'beeju' },
  { japanese: 'ゴールド', english: 'gold', category: 'colors', difficulty: 'hard', hint: 'Color of precious metal', romaji: 'goorudo' },
  { japanese: 'シルバー', english: 'silver', category: 'colors', difficulty: 'hard', hint: 'Color of coins', romaji: 'shirubaa' },
  { japanese: 'マロン', english: 'maroon', category: 'colors', difficulty: 'hard', hint: 'Dark red color', romaji: 'maron' },

  // Numbers (Easy)
  { japanese: 'いち', english: 'one', category: 'numbers', difficulty: 'easy', hint: 'First number', romaji: 'ichi' },
  { japanese: 'に', english: 'two', category: 'numbers', difficulty: 'easy', hint: 'Second number', romaji: 'ni' },
  { japanese: 'さん', english: 'three', category: 'numbers', difficulty: 'easy', hint: 'Third number', romaji: 'san' },
  { japanese: 'よん', english: 'four', category: 'numbers', difficulty: 'easy', hint: 'Fourth number', romaji: 'yon' },
  { japanese: 'ご', english: 'five', category: 'numbers', difficulty: 'easy', hint: 'Fifth number', romaji: 'go' },

  // Numbers (Medium)
  { japanese: 'ろく', english: 'six', category: 'numbers', difficulty: 'medium', hint: 'Sixth number', romaji: 'roku' },
  { japanese: 'なな', english: 'seven', category: 'numbers', difficulty: 'medium', hint: 'Seventh number', romaji: 'nana' },
  { japanese: 'はち', english: 'eight', category: 'numbers', difficulty: 'medium', hint: 'Eighth number', romaji: 'hachi' },
  { japanese: 'きゅう', english: 'nine', category: 'numbers', difficulty: 'medium', hint: 'Ninth number', romaji: 'kyuu' },
  { japanese: 'じゅう', english: 'ten', category: 'numbers', difficulty: 'medium', hint: 'Tenth number', romaji: 'juu' },

  // Numbers (Hard)
  { japanese: 'じゅういち', english: 'eleven', category: 'numbers', difficulty: 'hard', hint: 'Ten plus one', romaji: 'juuichi' },
  { japanese: 'じゅうに', english: 'twelve', category: 'numbers', difficulty: 'hard', hint: 'Ten plus two', romaji: 'juuni' },
  { japanese: 'にじゅう', english: 'twenty', category: 'numbers', difficulty: 'hard', hint: 'Two tens', romaji: 'nijuu' },
  { japanese: 'ひゃく', english: 'hundred', category: 'numbers', difficulty: 'hard', hint: 'Ten tens', romaji: 'hyaku' },
  { japanese: 'せん', english: 'thousand', category: 'numbers', difficulty: 'hard', hint: 'Ten hundreds', romaji: 'sen' },

  // Family (Easy)
  { japanese: 'おとうさん', english: 'father', category: 'family', difficulty: 'easy', hint: 'Male parent', romaji: 'otousan' },
  { japanese: 'おかあさん', english: 'mother', category: 'family', difficulty: 'easy', hint: 'Female parent', romaji: 'okaasan' },
  { japanese: 'おにいさん', english: 'older brother', category: 'family', difficulty: 'easy', hint: 'Male sibling who is older', romaji: 'oniisan' },
  { japanese: 'おねえさん', english: 'older sister', category: 'family', difficulty: 'easy', hint: 'Female sibling who is older', romaji: 'oneesan' },
  { japanese: 'いもうと', english: 'younger sister', category: 'family', difficulty: 'easy', hint: 'Female sibling who is younger', romaji: 'imouto' },

  // Family (Medium)
  { japanese: 'おとうと', english: 'younger brother', category: 'family', difficulty: 'medium', hint: 'Male sibling who is younger', romaji: 'otouto' },
  { japanese: 'おじいさん', english: 'grandfather', category: 'family', difficulty: 'medium', hint: 'Father\'s father', romaji: 'ojiisan' },
  { japanese: 'おばあさん', english: 'grandmother', category: 'family', difficulty: 'medium', hint: 'Father\'s mother', romaji: 'obaasan' },
  { japanese: 'おじさん', english: 'uncle', category: 'family', difficulty: 'medium', hint: 'Father\'s brother', romaji: 'ojisan' },
  { japanese: 'おばさん', english: 'aunt', category: 'family', difficulty: 'medium', hint: 'Father\'s sister', romaji: 'obasan' },

  // Family (Hard)
  { japanese: 'いとこ', english: 'cousin', category: 'family', difficulty: 'hard', hint: 'Child of your uncle or aunt', romaji: 'itoko' },
  { japanese: 'めい', english: 'niece', category: 'family', difficulty: 'hard', hint: 'Brother or sister\'s daughter', romaji: 'mei' },
  { japanese: 'おい', english: 'nephew', category: 'family', difficulty: 'hard', hint: 'Brother or sister\'s son', romaji: 'oi' },
  { japanese: 'よめ', english: 'daughter-in-law', category: 'family', difficulty: 'hard', hint: 'Son\'s wife', romaji: 'yome' },
  { japanese: 'むすめ', english: 'daughter', category: 'family', difficulty: 'hard', hint: 'Female child', romaji: 'musume' },

  // Weather (Easy)
  { japanese: 'あめ', english: 'rain', category: 'weather', difficulty: 'easy', hint: 'Water falling from the sky', romaji: 'ame' },
  { japanese: 'ゆき', english: 'snow', category: 'weather', difficulty: 'easy', hint: 'Frozen water falling from the sky', romaji: 'yuki' },
  { japanese: 'くもり', english: 'cloudy', category: 'weather', difficulty: 'easy', hint: 'Sky covered with clouds', romaji: 'kumori' },
  { japanese: 'はれ', english: 'sunny', category: 'weather', difficulty: 'easy', hint: 'Clear sky with sun', romaji: 'hare' },
  { japanese: 'かぜ', english: 'wind', category: 'weather', difficulty: 'easy', hint: 'Moving air', romaji: 'kaze' },

  // Weather (Medium)
  { japanese: 'あらし', english: 'storm', category: 'weather', difficulty: 'medium', hint: 'Severe weather with strong winds', romaji: 'arashi' },
  { japanese: 'かみなり', english: 'thunder', category: 'weather', difficulty: 'medium', hint: 'Loud sound during storms', romaji: 'kaminari' },
  { japanese: 'きり', english: 'fog', category: 'weather', difficulty: 'medium', hint: 'Low cloud near the ground', romaji: 'kiri' },
  { japanese: 'つゆ', english: 'rainy season', category: 'weather', difficulty: 'medium', hint: 'Period of heavy rain', romaji: 'tsuyu' },
  { japanese: 'たいふう', english: 'typhoon', category: 'weather', difficulty: 'medium', hint: 'Tropical storm', romaji: 'taifuu' },

  // Weather (Hard)
  { japanese: 'ひょう', english: 'hail', category: 'weather', difficulty: 'hard', hint: 'Frozen rain', romaji: 'hyou' },
  { japanese: 'みぞれ', english: 'sleet', category: 'weather', difficulty: 'hard', hint: 'Mix of rain and snow', romaji: 'mizore' },
  { japanese: 'にわかあめ', english: 'shower', category: 'weather', difficulty: 'hard', hint: 'Brief rain', romaji: 'niwakaame' },
  { japanese: 'あられ', english: 'graupel', category: 'weather', difficulty: 'hard', hint: 'Small snow pellets', romaji: 'arare' },
  { japanese: 'つなみ', english: 'tsunami', category: 'weather', difficulty: 'hard', hint: 'Large ocean wave', romaji: 'tsunami' },

  // Time (Easy)
  { japanese: 'いま', english: 'now', category: 'time', difficulty: 'easy', hint: 'Present moment', romaji: 'ima' },
  { japanese: 'きょう', english: 'today', category: 'time', difficulty: 'easy', hint: 'This day', romaji: 'kyou' },
  { japanese: 'あした', english: 'tomorrow', category: 'time', difficulty: 'easy', hint: 'Next day', romaji: 'ashita' },
  { japanese: 'きのう', english: 'yesterday', category: 'time', difficulty: 'easy', hint: 'Previous day', romaji: 'kinou' },
  { japanese: 'あさ', english: 'morning', category: 'time', difficulty: 'easy', hint: 'Early part of the day', romaji: 'asa' },

  // Time (Medium)
  { japanese: 'ひる', english: 'noon', category: 'time', difficulty: 'medium', hint: 'Middle of the day', romaji: 'hiru' },
  { japanese: 'よる', english: 'night', category: 'time', difficulty: 'medium', hint: 'Dark part of the day', romaji: 'yoru' },
  { japanese: 'こんばん', english: 'tonight', category: 'time', difficulty: 'medium', hint: 'This night', romaji: 'konban' },
  { japanese: 'らいしゅう', english: 'next week', category: 'time', difficulty: 'medium', hint: 'The week after this one', romaji: 'raishuu' },
  { japanese: 'せんしゅう', english: 'last week', category: 'time', difficulty: 'medium', hint: 'The week before this one', romaji: 'senshuu' },

  // Time (Hard)
  { japanese: 'らいげつ', english: 'next month', category: 'time', difficulty: 'hard', hint: 'The month after this one', romaji: 'raigetsu' },
  { japanese: 'せんげつ', english: 'last month', category: 'time', difficulty: 'hard', hint: 'The month before this one', romaji: 'sengetsu' },
  { japanese: 'らいねん', english: 'next year', category: 'time', difficulty: 'hard', hint: 'The year after this one', romaji: 'rainen' },
  { japanese: 'きょねん', english: 'last year', category: 'time', difficulty: 'hard', hint: 'The year before this one', romaji: 'kyonen' },
  { japanese: 'まいにち', english: 'every day', category: 'time', difficulty: 'hard', hint: 'Each day', romaji: 'mainichi' }
]; 