import test from 'ava';
import fn from './';

test('user with more than 100 repos', async t => {
	const token = '523ef691191741c99d5afbcfe58079bfa0038771';
	const repos = await fn('kevva', {token});

	t.truthy(repos.length);
	t.true(repos.length > 100);
});

test('user with lower than 100 repos', async t => {
	const token = '523ef691191741c99d5afbcfe58079bfa0038771';
	const repos = await fn('octocat', {token});

	t.truthy(repos.length);
	t.true(repos.length < 100);
});

test('two requests should return same data', async t => {
	const token = '523ef691191741c99d5afbcfe58079bfa0038771';
	const repos1 = await fn('octocat', {token});
	const repos2 = await fn('octocat', {token});

	t.truthy(repos1.length);
	t.truthy(repos2.length);
	t.deepEqual(repos1, repos2);
});
