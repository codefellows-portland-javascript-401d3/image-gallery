export default {
  template: `
	<div>
    <button ng-click="$ctrl.action = 'signin'">Sign In</button>
    <button ng-click="$ctrl.action = 'signup'">Sign Up</button>
	</div>
	<signin ng-if="$ctrl.action==='signin'" success="$ctrl.success()"></signin>
	<signup ng-if="$ctrl.action==='signup'" success="$ctrl.success()"></signup>
	`,
  bindings: { success: '&' },
  controller
};

function controller() {
  this.action = 'signin';
}
