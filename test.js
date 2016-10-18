import test from 'ava';
import resolvePath from './index';

test('should resolve relative path', t => {
	t.deepEqual(resolvePath('x.y', 'a/b'), 'a/x.y');
});

test('should resolve relative depth path', t => {
	t.deepEqual(resolvePath('x.y', 'a/b/c'), 'a/b/x.y');
	t.deepEqual(resolvePath('d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ./ path', t => {
	t.deepEqual(resolvePath('./x.y', 'a/b'), 'a/x.y');
	t.deepEqual(resolvePath('./d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ../ path', t => {
	t.deepEqual(resolvePath('../d/x.y', 'a/b/c'), 'a/d/x.y');
	t.deepEqual(resolvePath('../../d/x.y', 'a/b/c'), 'd/x.y');
});
