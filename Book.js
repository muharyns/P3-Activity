class Book {
  constructor(title, author, pages, description, currentPage, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.description = description;
    this.currentPage = 1;
    this.read = read;
  }
  
   readBook (page) {
    if(page > this.pages || page < 0 ){
      this.currentPage = 'number is invalid';
    }
    else{
      if(page == this.pages){
        this.read = true;
      }
      this.currentPage = page;
    }
   }
}

export { Book };
