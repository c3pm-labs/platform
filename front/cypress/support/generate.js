import { build, fake } from 'test-data-bot';

export const buildUser = build('User').fields({
    username: fake(f => f.internet.userName()),
    email: fake(f => f.internet.email()),
    password: fake(f => f.internet.password()),
})
