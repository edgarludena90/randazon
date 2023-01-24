class UsersController < ApplicationController
  before_action :authorized_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    render json: User.all
  end
  # GET /users/1
  def show
    render json: current_user, status :ok
  end
  # POST /users
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    if user
      render json: user, status: :created
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    user = User.find_by(id: session[:user_id])
    user.update(user_params)
    render json: user
  end

  # DELETE /users/1
  def destroy
    user = User.find(params[:user_id])
    user.delete
    head :no_content
  end

  private

    def user_params
      params.require(:user).permit(:name, :username, :email, :password, :password_confirmation)
    end
end