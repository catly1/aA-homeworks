class CatsController < ApplicationController
  def index

    @cats = Cat.all
    render :index

  end

  def show
    @cat = Cat.find_by(id: params[:id])

    if @cat
      render :show
    else
      redirect_to cats_url
    end
  end

  def new
    @cat = Cat.new
    render :new
  end

  def create
    @cat = Cat.new(cat_params)

    if @cat.save
      # show user the book show page
      redirect_to cat_url(@cat)
    else
      # show user the new cat form
      render :new
    end
  end

  def edit
    @cat = Cat.find_by(id: params[:id])
    render :edit
  end

  def update
    @cat = Cat.find_by(id: params[:id])

    if @cat.update_attributes(cat_params)
      redirect_to cat_url(@cat)
    else
      render :edit
    end
  end

  def destroy
  end

  private
  # might need to take out description
  def cat_params
    params.require(:cat).permit(:birth_date, :name, :color, :sex, :description)
  end

end




#  def index
#     @books = Book.all
#     render :index
#   end

#   def show
#     @book = Book.find_by(id: params[:id])

#     if @book
#       render :show
#     else
#       redirect_to books_url
#     end
#   end

#   def new
#     @book = Book.new
#     render :new
#   end

#   def create
#     @book = Book.new(book_params)

#     if @book.save
#       # show user the book show page
#       redirect_to book_url(@book)
#     else
#       # show user the new book form
#       render :new
#     end
#   end

#   def edit
#     @book = Book.find_by(id: params[:id])
#     render :edit
#   end

#   def update
#     @book = Book.find_by(id: params[:id])

#     if @book.update_attributes(book_params)
#       redirect_to book_url(@book)
#     else
#       render :edit
#     end
#   end

#   private
#   def book_params
#     params.require(:book).permit(:title, :author, :year, :description, :category)
#   end
