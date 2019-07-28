import { Book } from './Book.js';

let firstBook= new Book('A Case of Need', ' Michael Crichton', 434, ' In the tightly knit world of Boston medicine, the Randall family reigns supreme. When heart surgeon J. D. Randall’s teenage daughter dies during a botched abortion, the medical community threatens to explode. Was it malpractice? A violation of the Hippocratic Oath? Or was Karen Randall murdered in cold blood? The natural suspect is Arthur Lee, a brilliant surgeon and known abortionist, who has been carrying out the illegal procedure with the help of pathologist John Berry. After Karen dies, Lee is thrown in jail on a murder charge, and only Berry can prove his friend wasn’t the one who wielded the scalpel. Behind this gruesome death, Berry will uncover a secret that would shock even the most hardened pathologist.  An Edgar Award–winning novel by the author of such blockbusters as The Andromeda Strain and Jurassic Park—and creator of the long-running NBC drama ER—A Case of Need is a “superb” medical-thriller mystery (Los Angeles Times). This ebook features an illustrated biography of Michael Crichton including rare images from the author’s estate.', 898, false);
let secondBook = new Book('Ikigai', 'Hector Garcia', 208, 'Alongside Héctor García, he was welcomed to Okinawa in Japan, where the inhabitants live for longer than in any other place in the world. There they had the chance to interview more than a hundred villagers about their philosophy for a long and happy life.', 1, true);
let thirdBook = new Book('The Power of your Subconscious Mind', 'Joseph Murphy', 312, 'Joseph Murphy was an American author and New Thought minister, ordained in Divine Science and Religious Science.', 4, true);

console.log(Book.readBook);
let bookList = [firstBook, secondBook, thirdBook];

export { bookList };
