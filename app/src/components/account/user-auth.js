export default {
  template: `
	<div>
    <button ng-click="$ctrl.action = 'signin'">Sign In</button>
    <button ng-click="$ctrl.action = 'signup'">Sign Up</button>
	</div>
	<signin ng-if="$ctrl.action==='signin'" cancel="$ctrl.cancel()" success="$ctrl.success()"></signin>
	<signup ng-if="$ctrl.action==='signup'" cancel="$ctrl.cancel()" success="$ctrl.success()"></signup>
	`,
  bindings: {
    success: '&',
    cancel: '&'
  },
  controller
};

function controller() {
  this.action = 'signin';
}
