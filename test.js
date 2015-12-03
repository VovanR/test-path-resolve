import test from 'ava';
import 'babel-core/register';
import foo, {bar, baz} from './index';

test('foo', t => {
	t.is(typeof foo, 'object');
});

test('.bar', t => {
	t.same(bar, 3);
});

test.cb('.baz()', t => {
	baz()
		.then(() => {
			t.pass();
			t.end();
		})
		.catch(() => {
			t.fail();
			t.end();
		});
});

test('._qux', t => {
	t.is(foo._qux(), 'qux');
});
