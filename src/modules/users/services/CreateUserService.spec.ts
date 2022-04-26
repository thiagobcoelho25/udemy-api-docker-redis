import 'reflect-metadata';
import CreateUserService from './CreateUserService';
import FakeUsersRepository from '@modules/users/domain/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import FakeHashProvider from '../providers/HashProvider/fakes/FakeHashProvider';

let fakeUsersRepository: FakeUsersRepository;
let createUser: CreateUserService;
let hashProvider: FakeHashProvider;

describe('CreateUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    hashProvider = new FakeHashProvider();
    createUser = new CreateUserService(fakeUsersRepository, hashProvider);
  });

  it('should be able to create a new user', async () => {
    const user = await createUser.execute({
      name: 'User 1',
      email: 'user_1@email.com',
      password: '123',
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create two customers with the same email', async () => {
    await createUser.execute({
      name: 'User 1',
      email: 'user_1@email.com',
      password: '123',
    });

    expect(
      createUser.execute({
        name: 'User 1',
        email: 'user_1@email.com',
        password: '123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
