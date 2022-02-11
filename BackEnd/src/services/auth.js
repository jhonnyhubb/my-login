import bcrypt from 'bcryptjs';

export const createPasswordHash = async (password) => {
    bcrypt.hash(password, 8);

    return bcrypt.hash(password, 8);
}