(function (module) {
    module.directive("bsModal", ['$sce', '$timeout', '$templateCache', function ($sce, $timeout, $templateCache) {
        var link = function (scope, element, attrs, tabsCtrl) {
            var modalElementIdName = attrs.template ? attrs.template : "BSModal";
            var modalElement = $("#" + modalElementIdName);
            var templateDirectory = (attrs.directory ? attrs.directory : "");
            var modalSize = {
                sm: "modal-sm",
                lg: "modal-lg"
            };

            scope.BootstrapModal = {
                copy: {},
                config: {
                    title: attrs.title,
                    content: attrs.content,
                    template: {
                        directory: templateDirectory,
                        name: attrs.templateName
                    },
                    modalSize: modalSize[attrs.size] ? modalSize[attrs.size] : "",
                    buttons: {
                        cancel: {
                            show: attrs.showCancelButton === "true" ? true : false,
                            label: attrs.labelCancelButton ? attrs.labelCancelButton : "Cancel",
                            action: function () {
                                modalElement.modal("hide");
                            }
                        },
                        accept: {
                            show: true,
                            label: attrs.labelAcceptButton ? attrs.labelAcceptButton : "Accept",
                            action: function () {
                                modalElement.modal("hide");
                            },
                            fullAction: function () {
                                modalElement.modal("hide");
                                this.action();
                            }
                        },
                        close: {
                            show: attrs.showCloseButton === "true" ? true : false
                        }
                    }
                },
                save: function () {

                    var self = this.config;
                    this.copy = {
                        title: self.title,
                        content: self.content,
                        template: {
                            directory: self.directory,
                            name: self.template.name
                        },
                        modalSize: self.modalSize,
                        buttons: {
                            cancel: {
                                show: self.buttons.cancel.show,
                                label: self.buttons.cancel.label,
                                action: self.buttons.cancel.action
                            },
                            accept: {
                                show: self.buttons.accept.show,
                                label: self.buttons.accept.label,
                                action: self.buttons.accept.action,
                                fullAction: self.buttons.accept.fullAction
                            },
                            close: {
                                show: self.buttons.close.show
                            }
                        }
                    };
                },
                restore : function () {
                        if (this.copy.title) {
                            this.config = this.copy;
                            this.copy = {};
                        }
                }
                ,
                show: function (content, title) {
                    if (title) {
                        this.config.title = title;
                    }
                    /*this.config.content = content*/
                    modalElement.modal("show");
                    this.config.content = $sce.trustAsHtml(content);
                }
                ,
                showTitle: function () {
                    return this.config.title !== false;
                }
            };
        };

            return {
                restrict: 'E',
                link: link,
                //templateUrl: "bootstrap-modal.html",
                templateUrl: function (elem, attrs) {
                    if (attrs.template) {
                        var templateDir = (attrs.directory ? attrs.directory + "/" : "");
                        var templateName = templateDir + "bs-modal-" + attrs.template + ".html";
                        return templateName;
                    } else {
                        return 'bootstrap-modal.html';
                    }
                }
            };

        }
        ]);

    module.run(['$templateCache', function ($templateCache) {
        var template = '<div class="modal fade" role="dialog" id="BSModal" aria-labelledby="BSModal">' +
            '    <div class="modal-dialog {{BootstrapModal.config.modalSize}}">' +
            '        <div class="modal-content">' +
            '            <div class="modal-header" ng-show="BootstrapModal.showTitle()">' +
            '                <button type="button" class="close" data-dismiss="modal" aria-label="Close" ng-show="BootstrapModal.config.buttons.close.show"><span aria-hidden="true">&times;</span></button>' +
            '                <h4 class="modal-title">{{BootstrapModal.config.title}}</h4>' +
            '            </div>' +
            '            <div class="modal-body" ng-bind-html="BootstrapModal.config.content"></div>' +
            '            <div class="modal-footer">' +
            '                <button type="button" class="btn btn-default" ng-show="BootstrapModal.config.buttons.cancel.show" ng-click="BootstrapModal.config.buttons.cancel.action()">{{BootstrapModal.config.buttons.cancel.label}}</button>' +
            '                <button type="button" class="btn btn-success" ng-show="BootstrapModal.config.buttons.accept.show" ng-click="BootstrapModal.config.buttons.accept.fullAction()">{{BootstrapModal.config.buttons.accept.label}}</button>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        $templateCache.put('bootstrap-modal.html', template);
    }]);

})(angular.module("bootstrap-modal", ["ng"]));

