import test from 'ava';
import resolvePath from '.';

test('should resolve relative path', t => {
	t.is(resolvePath('x.y', 'a/b'), 'a/x.y');
});

test('should resolve relative depth path', t => {
	t.is(resolvePath('x.y', 'a/b/c'), 'a/b/x.y');
	t.is(resolvePath('d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ./ path', t => {
	t.is(resolvePath('./x.y', 'a/b'), 'a/x.y');
	t.is(resolvePath('./d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ../ path', t => {
	t.is(resolvePath('../d/x.y', 'a/b/c'), 'a/d/x.y');
	t.is(resolvePath('../../d/x.y', 'a/b/c'), 'd/x.y');
});
