import test from 'ava';
import 'babel-core/register';
import resolvePath from './index';

test('should resolve relative path', t => {
	t.same(resolvePath('x.y', 'a/b'), 'a/x.y');
});

test('should resolve relative depth path', t => {
	t.same(resolvePath('x.y', 'a/b/c'), 'a/b/x.y');
	t.same(resolvePath('d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ./ path', t => {
	t.same(resolvePath('./x.y', 'a/b'), 'a/x.y');
	t.same(resolvePath('./d/x.y', 'a/b/c'), 'a/b/d/x.y');
});

test('should resolve ../ path', t => {
	t.same(resolvePath('../d/x.y', 'a/b/c'), 'a/d/x.y');
	t.same(resolvePath('../../d/x.y', 'a/b/c'), 'd/x.y');
});
